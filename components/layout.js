import ReactGA from 'react-ga'
import Router from 'next/router'
import NProgress from 'nprogress'
import Menu from '../components/menu'
import Nav from '../components/nav'
import Footer from '../components/footer'
import React from 'react'
import $ from 'jquery'

const isServer = typeof window === 'undefined'
if (!isServer) {
  window.WOW = require('wowjs')
  window.wow = new WOW.WOW({
    live: false
  })
  window.wow.init()
}

if (!isServer) {
  // begin shitty ass jQuery
  document.addEventListener('DOMContentLoaded', function() {
    let isActive = false
    const $hamburger = $('.hamburger')

    $($hamburger).on('click', function() {
      if (isActive === false) {
        expandMenu()
      }
      else {
        collapseMenu()
      }
    })

    const expandMenu = () => {
      isActive = true
      $hamburger.addClass('is-active')
      $('html, body').animate({
        scrollTop: 0
      }, 0, function() {
        $('html, body').addClass('blocked'),
        $('aside').fadeIn('200', function() {
          $('.menu').addClass('expanded')
        })
      })
    }

    const collapseMenu = () => {
      isActive = false
      $hamburger.removeClass('is-active')
      $('html, body').removeClass('blocked')
      $('.menu').removeClass('expanded')
      $('aside').fadeOut('200')
    }

    let top = !1
    $(document).on('scroll', function() {
      $(window).scrollTop() > 650 ? top || ($('nav').hide().stop().fadeIn(300).css({
        position: 'fixed',
        top: '15px',
      }),
      top = !0) : ($('nav').css({
        position: 'absolute',
        top: '0'
      }),
      top = !1)
    })

    collapseMenu()
    // $('body').attr('oncontextmenu', 'return false')
  })

  // google analytics
  ReactGA.initialize('UA-3241810-3')
  ReactGA.pageview(window.location.pathname + window.location.search)
}

Router.onRouteChangeStart = () => {
  NProgress.start()
}
Router.onRouteChangeComplete = () => NProgress.done()
Router.onRouteChangeError = () => NProgress.done()

export default function Layout({ children }) {
  return (
    <>
      <Menu />
      <Nav />
      <main>{children}</main>
      <Footer />
    </>
  )
}
