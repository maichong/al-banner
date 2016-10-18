/**
 * @copyright Maichong Software Ltd. 2016 http://maichong.it
 * @date 2016-10-18
 * @author li <li@maichong.it>
 */

import wx from 'labrador';

const { bool, number, Function, array } = wx.PropTypes;


export default class Banner extends wx.Component {
  propTypes = {
    indicatorDots: bool,
    autoPlay: bool,
    interval: number,
    duration: number,
    list: array,
    onBannerTap: Function
  };

  data = {
    indicatorDots: true,
    autoPlay: true,
    interval: 3000,
    duration: 1000
  };

  handleTab(e) {
    let url = e.currentTarget.dataset.url;
    let id = e.currentTarget.dataset.id;
    console.log('banner handleTap', e);
    if (id && url) {
      this.props.onBannerTap(id, url);
    } else if (id) {
      this.props.onBannerTap(id);
    } else if (url) {
      this.props.onBannerTap(url);
    }
  }

  onLoad() {

  }

  onReady() {

  }

  onShow() {

  }

  onHide() {

  }

  onUnload() {

  }

  onUpdate(props) {
    this.setData(props);
  }
}
