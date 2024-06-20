import React, { useEffect } from 'react'
import { setPage } from '../../../constant/utils/set_page'
import { RouteDetails } from '../../../constant/routes/routes'
import './../style/home_screen.css'
import {LogoTextInfoWidget, LogoTextInfoWidgetItem} from '../../../constant/widget/logo_text_info_widget'

export default function HomeScreen() {
  useEffect(() => {
    setPage(RouteDetails.home.content)
  }, [])
  
  return (
    <main className='home-area'>
      <div className='picture-area'>
        <div className='my-info'>
          <div className='name'>Efe Işık</div>
          <div className='province-country'>İSTANBUL / TÜRKİYE</div>
        </div>
        <div className='my-contact'>
          <h1>İletişim Bilgilerim</h1>
          <LogoTextInfoWidget>
            <LogoTextInfoWidgetItem content={"+90 0505 097 76 30"} logoUrl={'/img/white/phone.svg'} isLink={true} linkType='phone'/>
            <LogoTextInfoWidgetItem content={"isik.efe017@gmail.com"} logoUrl={'/img/white/mail.svg'} isLink={true} linkType='email'/>
          </LogoTextInfoWidget>
        </div>
      </div>
    </main>
  )
}
