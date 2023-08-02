
/*!
 * Webflow: Front-end site library
 * @license MIT
 * Inline scripts may access the api using an async handler:
 *   var Webflow = Webflow || [];
 *   Webflow.push(readyFunction);
 * 
 */
  function handleClick() {
        console.log('Button clicked!')
        window.botpressWebChat.sendEvent({ type: 'show' })
      }
 
      const button1 = document.getElementById('gs1')
      button1.addEventListener('click', handleClick)

      const button = document.getElementById('gs2')
      button.addEventListener('click', handleClick)



