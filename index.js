/**
 * @copyright Maichong Software Ltd. 2016 http://maichong.it
 * @date 2016-10-18
 * @author li <li@maichong.it>
 */

import wx from 'labrador';
import immutable from 'seamless-immutable';

const { bool, number, func, array } = wx.PropTypes;


export default class Banner extends wx.Component {
  propTypes = {
    indicatorDots: bool,
    autoPlay: bool,
    interval: number,
    duration: number,
    list: array,
    onBannerTap: func
  };

  data = {
    list: immutable([]),
    indicatorDots: true,
    autoPlay: true,
    interval: 3000,
    duration: 1000
  };

  handleTab(e) {
    let url = e.currentTarget.dataset.url;
    let id = e.currentTarget.dataset.id;
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
    let list = immutable(props.list);
    this.setData({ list });
  }
}
