import React from "react";

import WhatsAppWidget from "react-whatsapp-chat-widget";
import "react-whatsapp-chat-widget/index.css";
import Aura from '../components/AURA.png';


const WApp = () => {
	return (
		<WhatsAppWidget
			phoneNo="917860116433"
			position="right"
			widgetWidth="300px"
			widgetWidthMobile="260px"
			autoOpen={false}
			autoOpenTimer={1000}
			messageBox={true}
			messageBoxTxt=""
			iconSize="50"
			iconColor="white"
			iconBgColor="Black"
			headerIcon={Aura}
			headerIconColor="black"
			headerTxtColor="black"
			headerBgColor="#25D366"
			headerTitle="Aura Rugs"
			headerCaption="Available"
			bodyBgColor="white"
			chatPersonName="Sale Executive"
			chatMessage={<>Hi there 👋 <br /><br /> How can we help you?</>}
			footerBgColor="white"
			btnBgColor="#25D366"
			btnTxtColor="white"
			btnTxt="Start Chat"
		/>
	);
};

export default WApp;