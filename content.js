document.addEventListener('DOMContentLoaded', () => {
  document.addEventListener('mouseup', () => {
    try {
      let selectedText = window.getSelection().toString();
      if (selectedText) {
        chrome.runtime.sendMessage({ text: selectedText }, response => {
          console.log('Response from background:', response);
        });
        console.log('Selected text sent to background:', selectedText);
      }
    } catch (error) {
      console.error('Error in content script:', error);
    }
  });
});
