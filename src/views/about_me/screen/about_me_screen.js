import React, { useEffect } from 'react'
import { setPage } from '../../../constant/utils/set_page'
import { RouteDetails } from '../../../constant/routes/routes'
import './../style/about_me_screen.css'
import { LogoTextInfoWidget, LogoTextInfoWidgetItem } from '../../../constant/widget/logo_text_info_widget'

export default function AboutMeScreen() {
  useEffect(() => {
    setPage(RouteDetails.about_me.content)
  }, [])
  
  return (
    <main className='about-area'>
      <h1>Hakkımda</h1>
        <LogoTextInfoWidget>
            <LogoTextInfoWidgetItem content={"Efe Işık"} logoUrl={'/img/black/person.svg'} color='#000000'/>
            <LogoTextInfoWidgetItem content={"12. Sınıf Öğrencisiyim. Son 3 yıldır web ve mobil alanda kod yazıyorum."} logoUrl={'/img/black/me.svg'} color='#000000'/>
            <LogoTextInfoWidgetItem content={"Katılınan Yarışmalar : Teknofest, Tübitak 4006"} logoUrl={'/img/black/tournament.svg'}  color='#000000'/>
            <LogoTextInfoWidgetItem content={"https://github.com/efeisky"} logoUrl={'/img/black/github.svg'} isLink={true} color='#000000'/>
            <LogoTextInfoWidgetItem content={"isik.efe017@gmail.com"} logoUrl={'/img/black/mail.svg'} isLink={true} linkType='email'  color='#000000'/>
            <LogoTextInfoWidgetItem content={"+90 0505 097 76 30"} logoUrl={'/img/black/phone.svg'} isLink={true} linkType='phone'  color='#000000'/>
        </LogoTextInfoWidget>
    </main>
  )
}
