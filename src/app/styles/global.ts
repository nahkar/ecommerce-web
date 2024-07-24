import styled, { createGlobalStyle } from 'styled-components';

import { ThemeT } from './theme';

export const GlobalStyle = createGlobalStyle<{ theme: ThemeT }>`	
  *, *::before, *::after{
      box-sizing: border-box; 
  }

  *{
      margin: 0; 
      padding: 0;
      color: ${({ theme }) => theme.light.colors.text.primary};
  }

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }

  ul[role='list'], ol[role='list']{
      list-style: none; 
  }

  li {
      list-style-type: none;
  }

  html:focus-within{
      scroll-behavior: smooth; 
  }

  a:not([class]){
      text-decoration-skip-ink: auto; 
  }

  img, picture, svg, video, canvas{
      max-width: 100%;
      height: auto; 
      vertical-align: middle; 
      font-style: italic; 
      background-repeat: no-repeat; 
      background-size: cover;
  }

  input, button, textarea, select{
      font: inherit; 
  }

  @media (prefers-reduced-motion: reduce){
      html:focus-within {
          scroll-behavior: auto;
      }
      *, *::before, *::after {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
          scroll-behavior: auto !important;
          transition: none;
      }
  }

  body, html{
      height: 100%; 
      scroll-behavior: smooth; 
      font-family: "Inter", sans-serif;

  }

  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
`;

export const Container = styled.div<{ $mb?: number; $width?: number }>`
	margin-bottom: ${({ $mb }) => $mb || 0}px;
	width: ${({ $width }) => `${$width}px` || '100%'};
`;
export const EllipsisSection = styled.div`
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
`;
export const LayoutInnerContainer = styled.div<{ theme: ThemeT }>`
	margin: 0 auto;
	max-width: ${({ theme }) => theme.breakpoints.desktop}px;
`;
