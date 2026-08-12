export const scrollTo = (id) => {
  setTimeout(() => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      console.log('✅ Scrolled to:', id);
    } else {
      console.log('❌ Not found:', id);
    }
  }, 100);
};