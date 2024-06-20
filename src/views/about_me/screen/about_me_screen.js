import React, { useEffect } from 'react'
import { setPage } from '../../../constant/utils/set_page'
import { RouteDetails } from '../../../constant/routes/routes'
import './../style/about_me_screen.css'
import { LogoTextInfoWidget, LogoTextInfoWidgetItem } from '../../../constant/widget/logo_text_info_widget'
import imageProvider from '../../../constant/utils/image_path_provider'

export default function AboutMeScreen() {
  useEffect(() => {
    setPage(RouteDetails.about_me.content)
  }, [])
  
  return (
    <main className='about-area'>
      <h1>Hakkımda</h1>
        <LogoTextInfoWidget>
            <LogoTextInfoWidgetItem content={"Efe Işık"} logoUrl={imageProvider('person_black')} color='#000000'/>
            <LogoTextInfoWidgetItem content={"12. Sınıf Öğrencisiyim. Son 3 yıldır web ve mobil alanda kod yazıyorum."} logoUrl={imageProvider('me_black')} color='#000000'/>
            <LogoTextInfoWidgetItem content={"Katılınan Yarışmalar : Teknofest, Tübitak 4006"} logoUrl={imageProvider('tournament_black')}  color='#000000'/>
            <LogoTextInfoWidgetItem content={"https://github.com/efeisky"} logoUrl={imageProvider('github_black')} isLink={true} color='#000000'/>
            <LogoTextInfoWidgetItem content={"isik.efe017@gmail.com"} logoUrl={imageProvider('mail_black')} isLink={true} linkType='email'  color='#000000'/>
            <LogoTextInfoWidgetItem content={"+90 0505 097 76 30"} logoUrl={imageProvider('phone_black')} isLink={true} linkType='phone'  color='#000000'/>
        </LogoTextInfoWidget>
    </main>
  )
}
