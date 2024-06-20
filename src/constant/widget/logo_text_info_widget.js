import React from 'react';
import './logo_text_info_widget.css';

/**
 * 
 * @param {string} logoUrl Icon url
 * @param {string} content Text Content (maybe link)
 * @param {boolean} isLink if you want a link you must set it to true
 * @param {string} linkType it can be 'phone' or 'email'
 * @param {string} color it can be any valid CSS color value
 * @returns JSX.Element
 */
function LogoTextInfoWidgetItem({ logoUrl, content = '', isLink = false, linkType = 'default', color = '#FFFFFF' }) {
  const trimmedContent = content.trim();

  return (
    <div className='logo-text-info-widget-item'>
      <img src={logoUrl} alt={trimmedContent} />
      {
        isLink ? (
          <a style={{ color: color }} href={linkType === 'phone' ? `tel:${trimmedContent}` : linkType === 'email' ? `mailto:${trimmedContent}` : content}>{trimmedContent}</a>
        ) : (
          <span>{trimmedContent}</span>
        )
      }
    </div>
  );
}

function LogoTextInfoWidget({ children }) {
  return (
    <div className='logo-text-info-widget'>{children}</div>
  );
}

export { LogoTextInfoWidget, LogoTextInfoWidgetItem };
