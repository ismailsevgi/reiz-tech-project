let getLocalTheme;

if (typeof window !== 'undefined') {
  // Perform localStorage action
  let theme = JSON.parse(localStorage.getItem('world_theme')!);
  if (theme) {
    getLocalTheme = theme;
  } else {
    getLocalTheme = null;
  }
}

export { getLocalTheme };
