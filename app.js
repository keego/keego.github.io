

const portfolioData = {
  projects: [
    {
      name: 'Angular Test App',
      repo: {
        link: 'github.com/keego/angular-test-app',
      },
    },
  ],
}

const init = () => {
  console.log('init')
}

addLoadListener(init)

// --------------------------------------------------
//
// --------------------------------------------------

function addLoadListener(listener) {
  // `DOMContentLoaded` may fire before your script has a chance to run, so check before adding a listener
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', listener)
  } else {
    // `DOMContentLoaded` already fired
    listener()
  }
}