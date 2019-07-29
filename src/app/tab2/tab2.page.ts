import { Component } from '@angular/core';
import { Wechat } from '@ionic-native/wechat/ngx';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(private wechat: Wechat) { }

  share() {
    this.wechat.share({
      message: {
        title: "[IYou绘本]少儿英语，一天一读之(" + 'this.book.title' + ")",
        description: "This is description.",
        thumb: "www/img/thumbnail.png",
        mediaTagName: "TEST-TAG-001",
        messageExt: "这是第三方带的测试字段",
        messageAction: "<action>dotalist</action>",
        media: {
          type: 7,// this.wechat.Type.WEBPAGE,
          webpageUrl: "iyou.city",//environment.apiUrl + '/download'//"http://www.bing.com"
        }
      },
      scene: this.wechat.Scene.SESSION,   // share to Timeline
    }).then(() => {
      console.log("Success");
    }).catch(err => {
      //utilService.alert(JSON.stringify(err));
      console.log(err);
    });
  }
}
