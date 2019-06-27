export const HEADER_HEIGHT = 90;
export const MOBILE_HEADER_HEIGHT = 60;
export const MOBILE_WIDTH = 800;
export const MAIN_AREA_DESKTOP_HEIGHT = 645;
export const MAIN_AREA_MOBILE_HEIGHT = 500;

// in order for static files to be built gracefully we need the following...
const _window = typeof window !== 'undefined' && window;

let WIDTH = _window.innerWidth;

if (_window) {
  _window.onresize = function() {
    WIDTH = window.innerWidth;
  };
}

export const GET_WIDTH = () => WIDTH;

export const MENU_ITEMS = [
  {
    localeKey: 'Technology',
    link: '#technology',
  },
  {
    localeKey: 'Tech Support',
    link: '#resources'
  },
  // {
  //   localeKey: 'Media',
  // },
];