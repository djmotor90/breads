const React = require('react');


function error(html) {
    return (
      <html>
      <head>
        <title>{html.title || 'Default'}</title>
        </head>
      </html>
    )
  }
  
  
  
  
  module.exports = error