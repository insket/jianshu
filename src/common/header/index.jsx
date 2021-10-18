import React from 'react'
import { connect } from 'react-redux'
import { CSSTransition } from 'react-transition-group'
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Addition,
  Button,
  SearchWrapper
} from './style'

const Header = (props) => {
  return (
    <HeaderWrapper>
      <Logo />
      <Nav>
        <NavItem className='left active'>首页</NavItem>
        <NavItem className='left'>下载App</NavItem>
        <NavItem className='right'>登录</NavItem>
        <NavItem className='right'>
          <i className='iconfont icon-Aa'></i>
        </NavItem>
        <SearchWrapper>
          {/*  过渡动画  */}
          <CSSTransition
            in={props.focused}
            timeout={200}
            classNames='slider'
          >
            <NavSearch className={props.focused ? 'foucsed' : ''}
              onFocus={() => {props.handleInputFoucus()}}
              onBlur={() => {props.handleInputBlur()}}
            />
          </CSSTransition>
            <i className={props.focused ? 'foucsed iconfont icon-sousuo' : ' iconfont icon-sousuo'}></i>
        </SearchWrapper>
      </Nav>
      <Addition>
        <Button className='writting'>
          <i className='iconfont icon-yongyan'></i>
          写文章
        </Button>
        <Button className='reg'>注册</Button>
      </Addition>
    </HeaderWrapper>
  )
}

const mapStateToProps = (state) => {
  return {
    focused: state.focused
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    // 点击获取 input 获取焦点的回调
    handleInputFoucus () {
      const action = {
        type: 'search_focus'
      }
      dispatch(action)
    },
    // 失去 input 获取焦点的回调
    handleInputBlur () {
      const action = {
        type: 'search_blur'
      }
      dispatch(action)
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header)
