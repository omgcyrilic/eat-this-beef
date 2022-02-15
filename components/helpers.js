export const buildImageaArray = (img, imgbonus, imgexterior, restaurant) => {
  let images = [];

  if (img) {
    images.push({
      src: `https://images.eatthisbeef.com/${img}`,
      title: restaurant,
    });
  }

  if (imgbonus) {
    images.push({
      src: `https://images.eatthisbeef.com/${imgbonus}`,
      title: restaurant,
    });
  }

  if (imgexterior) {
    images.push({
      src: `https://images.eatthisbeef.com/${imgexterior}`,
      title: restaurant,
    });
  }

  return images;
};

export const getCategoryTag = (category, rank) => {
  if (category != null && rank != null) {
    if (category === 1 && rank > 0) {
      if (rank <= 99) {
        rank = ('0' + rank).slice(-2);
      }
      return 'top-' + rank;
    }
    if (category === 2) {
      return 'hm';
    }
    if (category === 3) {
      return 'fail';
    }
    if (category === 4) {
      return 'placeholder';
    } else {
      return 'error';
    }
  }
};

export const getDateDisplay = (dateString) => {
  var d = new Date(dateString);
  var month = new Array();
  month[0] = 'January';
  month[1] = 'February';
  month[2] = 'March';
  month[3] = 'April';
  month[4] = 'May';
  month[5] = 'June';
  month[6] = 'July';
  month[7] = 'August';
  month[8] = 'September';
  month[9] = 'October';
  month[10] = 'November';
  month[11] = 'December';
  var monthText = month[d.getMonth()];
  var year = d.getFullYear();
  return monthText + ' ' + year;
};
