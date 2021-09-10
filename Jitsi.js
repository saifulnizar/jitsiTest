import React, { useEffect, useState } from 'react';
import JitsiMeet, { JitsiMeetView } from 'react-native-jitsi-meet';
import {View, TouchableOpacity, Text, StatusBar} from 'react-native';

const Jitsi = () => {

	const [isRender, setRender] = useState(false);
  const [mute, setMute] = useState(false);
	const url = 'https://meet.jit.si/coba';
	const userInfo = {
	    displayName: 'SAIFUL',
	    email: 'user@example.com',
	    avatar: 'https:/gravatar.com/avatar/abc123',
	};


  useEffect(() => {
    StatusBar.setHidden(false, 'none'); // don't remove this
    StatusBar.setTranslucent(false); // don't remove this.
    StatusBar.setBackgroundColor('#000000'); // you can remove
    StatusBar.setBarStyle('light-content'); // you can remove
  	fetchMyAPI(url, userInfo)

  }, [])

  function fetchMyAPI(url, userInfo) {
    
      // setTimeout(() => {
        JitsiMeet.call(url, userInfo);
        setRender(true);
      // }, 100);
  }

  // console.log(isRender)
  function onConferenceTerminated(nativeEvent) {
    /* Conference terminated event */
    setRender(false);
    console.log('its terminate')
    JitsiMeet.endCall();
  
  }


  function onConferenceJoined(nativeEvent) {
    /* Conference joined event */
    console.log('joined')
  }

  function onConferenceWillJoin(nativeEvent) {
    /* Conference will join event */
    console.log('join')
     
    
  }

  const onlyAudio = true;
  const options = { url : url, userInfo, audioOnly: onlyAudio };

  return (
    <>
      {
        isRender ? (
          <JitsiMeetView
            onConferenceTerminated={e => onConferenceTerminated(e)}
            onConferenceJoined={e => onConferenceJoined(e)}
            onConferenceWillJoin={e => onConferenceWillJoin(e)}
            options={options}
            style={{
              flex: 1,
              height: '50%',
              width: '100%',
          }}
          />
        ) : (

          <TouchableOpacity 
            onPress={() => fetchMyAPI()}
            style={{ flex:1, justifyContent: 'center', alignItems: 'center'}} >
            <Text>connect</Text>
          </TouchableOpacity>

        )
      }
    </>
    );
}
export default Jitsi;

