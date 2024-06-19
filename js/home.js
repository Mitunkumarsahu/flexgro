// console.log('Home Page Loaded first line');


// var startTime = new Date().getTime();
// window.onload = function() {
//     // Calculate the page load time
//     var endTime = new Date().getTime();
//     var loadTime = endTime - startTime;
//     console.log("Page load time: " + loadTime + " milliseconds");
//     // clevertap.event.push("FlexiGro_Appdownload_Page_Loaded");
//     // mixpanel.track("FlexiGro_Appdownload_Page_Loaded");



//     // Device Based Footer for Mobile version
//     var userAgent = navigator.userAgent || navigator.vendor || window.opera;

//     if (/iPhone|iPod|iPad/.test(userAgent)) {
//       console.log('Iphone Device Detected');
//       document.querySelector('.footer-appstore').src = 'assets/app_store.svg';
//       document.querySelector('.footer-playstore').style.display = 'none';
//     }
//     else if (/android/i.test(userAgent)) {
//       console.log('Android Device Detected');
//       document.querySelector('.footer-playstore').src = 'assets/Google-play-btn.png';
//       document.querySelector('.footer-appstore').style.display = 'none';
//     } else {
//       console.log('Android Device Detected');
//       document.querySelector('.footer-playstore').src = 'assets/Google-play-btn.png';
//       document.querySelector('.footer-appstore').style.display = 'none';

//     }
// };

// document.querySelector('.header-logo').addEventListener('click', function() {
//     //  clevertap.event.push("Brand_Logo_Clicked");
//     //  mixpanel.track("Brand_Logo_Clicked");
// });

// function handleDeviceRedirection(eventMessage) {
//   var userAgent = navigator.userAgent.toLowerCase();
//   // clevertap.event.push(eventMessage);
//   // mixpanel.track(eventMessage);

//   // Device Based Redirection
//   if (userAgent.includes('android')) {
//       console.log('Android device detected. Redirecting to Play Store.');
      
//       window.location.href = 'https://play.google.com/store';
//   } else if (userAgent.includes('iphone')) {
//       console.log('iPhone device detected. Redirecting to App Store.');
      
//       window.location.href = 'https://itunes.apple.com/';
//   } else {
//       console.log('Unknown device detected. Redirecting to Play Store.');
//       window.location.href = 'https://play.google.com/store';
//   }
// }

// document.querySelector('.component-504').addEventListener('click', function() {
//   handleDeviceRedirection("AppDownload_Sticky button");
// });

// document.querySelector('.component-503').addEventListener('click', function() {
//   handleDeviceRedirection("DownloadApp_Card1");
// });

// document.querySelector('.component-502').addEventListener('click', function() {
//   handleDeviceRedirection("DownloadApp_Card2");
// });

// document.querySelector('.component-501').addEventListener('click', function() {
//   handleDeviceRedirection("DownloadApp_Card3");
// });

// document.querySelector('.component-50').addEventListener('click', function() {
//   handleDeviceRedirection("DownloadApp_Card4");
// });

// console.log('Home Page Loaded');
// document.querySelector('.ctas-1').addEventListener('click', function() {
//   // clevertap.event.push("AppDownload_IOS");
//   // mixpanel.track("AppDownload_IOS");
//   console.log('AppDownload_IOS');

//   window.location.href = 'https://itunes.apple.com/';
// });


// document.querySelector('.ctas-2').addEventListener('click', function() {
//   // clevertap.event.push("AppDownload_Android");
//   // mixpanel.track("AppDownload_Android");
//   window.location.href = 'https://play.google.com/store';
// });


  












var startTime = new Date().getTime();
window.onload = function() {
    try {
        // Calculate the page load time
        var endTime = new Date().getTime();
        var loadTime = endTime - startTime;
        console.log("Page load time: " + loadTime + " milliseconds");
        var userAgent = navigator.userAgent || navigator.vendor || window.opera;

        if (/iPhone|iPod|iPad/.test(userAgent)) {
            console.log('Iphone Device Detected');
            document.querySelector('.footer-appstore').src = 'assets/app_store.svg';
            document.querySelector('.footer-playstore').style.display = 'none';
        } else if (/android/i.test(userAgent)) {
            console.log('Android Device Detected');
            document.querySelector('.footer-playstore').src = 'assets/Google-play-btn.png';
            document.querySelector('.footer-appstore').style.display = 'none';
        } else {
            console.log('Other Device Detected');
            document.querySelector('.footer-playstore').src = 'assets/Google-play-btn.png';
            document.querySelector('.footer-appstore').style.display = 'none';
        }

        document.querySelector('.header-logo').addEventListener('click', function() {
            console.log('Brand Logo Clicked');
        });

        function handleDeviceRedirection(eventMessage) {
            var userAgent = navigator.userAgent.toLowerCase();
            console.log('Handling device redirection for: ' + eventMessage);
            if (userAgent.includes('android')) {
                console.log('Android device detected. Redirecting to Play Store.');
                window.location.href = 'https://play.google.com/store';
            } else if (userAgent.includes('iphone')) {
                console.log('iPhone device detected. Redirecting to App Store.');
                window.location.href = 'https://itunes.apple.com/';
            } else {
                console.log('Unknown device detected. Redirecting to Play Store.');
                window.location.href = 'https://play.google.com/store';
            }
        }

        document.querySelectorAll('.component-504, .component-503, .component-502, .component-501, .component-50').forEach(function(element) {
            element.addEventListener('click', function(event) {
                handleDeviceRedirection(event.target.className + ' clicked');
            });
        });

        document.querySelector('.ctas-1').addEventListener('click', function() {
            window.location.href = 'https://itunes.apple.com/';
        });

        document.querySelector('.ctas-2').addEventListener('click', function() {
            window.location.href = 'https://play.google.com/store';
        });

        document.querySelector('.footer-appstore').addEventListener('click', function() {
          window.location.href = 'https://itunes.apple.com/';
        });

        document.querySelector('.footer-playstore').addEventListener('click', function() {
            window.location.href = 'https://play.google.com/store';
        });

    } catch (error) {
        console.error('Error during onload execution:', error);
    }
};
