export const HEADER_HEIGHT = 90;
export const MOBILE_HEADER_HEIGHT = 40;
export const MOBILE_WIDTH = 800;
export const MAIN_AREA_DESKTOP_HEIGHT = 900;
export const MAIN_AREA_MOBILE_HEIGHT = 600;

// in order for static files to be built gracefully we need the following...
const _window = typeof window !== 'undefined' && window;

let WIDTH = _window.innerWidth;

if (_window) {
  _window.onresize = function() {
    WIDTH = window.innerWidth;
  };
}

export const GET_WIDTH = () => WIDTH;