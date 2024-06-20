import React from 'react'
import './language-detail-widget.css'
import Badge from './badge'
function LanguageDetailListWidget({children}) {
  return (
    <div className='language_detail_list'>
        {children}
    </div>
  )
}

function LanguageDetailItemWidget({language, level, useAreas}) {
  return (
    <div className='language_detail_item'>
        <h2>{language}</h2>
        <Badge contentList={useAreas}/>
        <span>Bilgi Seviyem : <strong>{level} / 10</strong></span>
    </div>
  )
}


export {LanguageDetailListWidget, LanguageDetailItemWidget}

