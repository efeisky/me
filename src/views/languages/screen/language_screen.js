import React, { useEffect } from 'react'
import { setPage } from '../../../constant/utils/set_page'
import { RouteDetails } from '../../../constant/routes/routes'
import { LanguageDetailItemWidget, LanguageDetailListWidget } from '../../../constant/widget/language-detail-widget'
import { myLanguages } from '../script/language_data'
import './../style/language_screen.css'
function LanguageScreen() {
  useEffect(() => {
    setPage(RouteDetails.software_languages.content)
  }, [])
  
  return (
    <main className='language-area'>
      <h1>Bildiğim Programlama Dilleri</h1>
      <LanguageDetailListWidget>
        {myLanguages.map((language)=>{
          return <LanguageDetailItemWidget 
          language={language.name} 
          level={language.level}
          useAreas={language.useAreas}
          />;
        })}
      </LanguageDetailListWidget>
    </main>
  )
}

export default LanguageScreen