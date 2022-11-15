import React from 'react';
import { Card, Text, Icon, Modal, View, Layout, Input } from '@ui-kitten/components';
import { Toggle } from '@ui-kitten/components';


export const CalendarCard = ({
  placeholder="date"
}) => {

  const [checked, setChecked] = React.useState(false);
  const [repeat, setRepeat] = React.useState(false);

  const [close, setClose] = React.useState(false);

  const handleClickClose= () => {
    setClose(current => !current);
}

  const onTimeChange = (isChecked) => {
    setChecked(isChecked);
  };

  const onRepeatChange = (isRepeat) => {
    setRepeat(isRepeat);
  };
  

  return <Card style={{width:360, height:430, borderRadius:35, alignItems:"center", position:"absolute",
  display: close ? 'none' : 'flex'}}>
    <Layout style={{flex:1, flexDirection:"row"}}>
      <Icon name="close-outline" fill="#434343" style={{width:23, height:23, }}
      onPress={handleClickClose}
      />
      <Text onPress={handleClickClose} style={{paddingLeft:260}}>Add</Text>
    </Layout>
    <Card style={{display:"flex", width:320, height:100, borderRadius:30, backgroundColor: "#F4C5AE", marginTop:5  }}>
      <Input size="small" placeholder='Title' style={{marginBottom:5, backgroundColor:"#ffffff", borderRadius:30}}></Input>
      <Input size="small" placeholder='Location' style={{backgroundColor:"#ffffff", borderRadius:30}}></Input>
    </Card>
    <Layout style={{flex:1, flexDirection:"row", paddingTop:30, alignItems:"left"}}>      
      <Text style={{paddingLeft:25, display:"inline"}}>All Day</Text>
      <Toggle style={{display:"inline", paddingLeft:185}} checked={checked} onChange={onTimeChange}></Toggle>
    </Layout>
    <Layout style={{flex:1, flexDirection:"row", alignItems:"left"}}>
      <Text style={{marginTop:-5, paddingLeft:25, display:"inline"}}>Starts</Text>
      <Input size="small" placeholder={placeholder} style={{borderRadius:30, width:80, marginLeft:75, marginRight:10}}></Input>
      <Input size="small" placeholder={placeholder} style={{borderRadius:30, width:80}}></Input>
    </Layout>
    <Layout style={{flex:1, flexDirection:"row", alignItems:"left"}}>
      <Text style={{marginTop:-5, paddingLeft:25, display:"inline"}}>Ends</Text>
      <Input size="small" placeholder={placeholder} style={{borderRadius:30, width:80, marginLeft:83, marginRight:10}}></Input>
      <Input size="small" placeholder={placeholder} style={{borderRadius:30, width:80}}></Input>
    </Layout>  
    <Card style={{flex:1, flexDirection:"row", borderRadius:35, marginBottom:30}}>
      <Text style={{}}>Repeat</Text>
      <Toggle style={{display:"inline", paddingLeft:235, marginTop:-25}} checked={repeat} onChange={onRepeatChange} ></Toggle>
    </Card>  
     

    

  </Card>


  
  
  
};