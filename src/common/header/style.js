import styled from 'styled-components'
import logoPic from '../../static/logo.png'

// 头部
export const HeaderWrapper = styled.div`
  position: relative;
  height: 56px;
  border-bottom: 1px solid #f0f0f0;
`;

// Logo
export const Logo = styled.a.attrs({
  href: '/'
})`
  height: 56px;
  width: 100px;
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  background: url(${logoPic});
  background-size: cover;
`;

// nav导航区
export const Nav = styled.div`
  width: 960px;
  height: 100%;
  padding-right: 70px;
  box-sizing: border-box;
  margin: 0 auto;
`;

// NavItem
export const NavItem = styled.div`
  line-height: 56px;
  padding:0 15px;
  font-size: 15px;
  color: #333;
  &.left{
    float:left;
  }
  &.right{
    float:right;
    color: #969696;
  }
  &.active{
    color: #ea6f5a;
    font-weight: 600;
  }
`;

// SearchWrapper
export const SearchWrapper = styled.div`
  float: left;
  position: relative;
  .iconfont{
    width: 30px;
    height: 30px;
    position: absolute;
    bottom: 2px;
    right: 1px;
    line-height:30px;
    border-radius: 50%;
    text-align: center;
    color: #ccc;
    &.foucsed{
      background: #ccc;
      color: #fff;
    }
  }
`

// NavSearch
export const NavSearch = styled.input.attrs({
  placeholder: '搜索'
})`
  width: 160px;
  height: 34px;
  padding: 0 40px 0 20px;
  box-sizing: border-box;
  border: none;
  outline:none;
  border-radius: 19px;
  background: #eee;
  margin-top: 11px;
  color: #777;
  font-size: 14px;
  &::placeholder{
    color: #999;
  }
  &.foucsed{
    width: 240px;
  }
  &.slider-enter{
    transition: all .2s linear;
  }
  &.slider-enter-active{
    width: 240px;
  }
  &.slider-exit{
    transition: all .2s linear;
  }
  &.slider-exit-active{
    width: 160px;
  }
`

// Addition
export const Addition = styled.div`
  position: absolute;
  right:0;
  top:0;
  height: 56px;
`
// Button
export const Button = styled.div`
  float: right;
  line-height: 30px;
  border-radius: 19px;
  margin-top: 13px;
  margin-right:20px;
  padding: 0 20px;
  border: 1px solid #ec6149;
  box-sizing: border-box;
  &.reg{
    color: #ec6149;
    font-size: 14px;
  }
  &.writting{
    color: #fff;
    background: #ec6149;
    font-size: 14px;
    &.iconfont{
      font-size: 12px;
    }
  }
`