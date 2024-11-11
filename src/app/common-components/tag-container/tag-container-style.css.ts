import Blogs from '@/app/components/health/health';
import { BoxStyle } from '@/app/strings/box-styling';
import { BreakPoints } from '@/app/strings/break-points';
import { BaseTheme } from '@/app/theme/theme';
import { style } from '@vanilla-extract/css';

export const baseContainer = style({
  position: 'relative',
  display: 'flex',
  height: 'max-content',
  overflow:"visible",
  flexDirection: 'column',
  background:BaseTheme.color.secondary(),
  boxShadow: BoxStyle.shadow.medium,
  borderLeft: `${BoxStyle.border.width.standard} ${BoxStyle.border.style.solid} ${BaseTheme.color.primary()}`,
  flexShrink: 0,
  justifyContent: 'center',
  width: '100%',
  ':hover':{

    backgroundColor:BaseTheme.color.primary(0.1),

  }
});


 const topBorderbase= style({
  position: 'relative',
  display: 'flex',
  overflow:"visible",
  background:BaseTheme.color.primary(),
  alignItems: 'center',
  height: '0.4rem',

});

export const topBorderContainer = {
  content: style([
    topBorderbase,
    {
      width: '100%',
      flexShrink:"0",
      background:BaseTheme.color.primary(0.2),
      justifyContent: 'end',
    }
  ]),
  blog: style([
    topBorderbase,
    {
      width: '100%',
      background: BaseTheme.color.primary(),
      justifyContent: 'center',
    }
  ]),
};


 const titleBase = style({
  position: 'absolute',
  justifyContent:"center",
  alignItems:"center",
  display:"flex",
  background:BaseTheme.color.primary(),
  borderLeftColor:BaseTheme.color.primary(1),
  borderLeftStyle:"solid",
  borderBottomColor:BaseTheme.color.primary(),
  borderLeftWidth:"0.2rem",
});

export const titleContainer = {

  content:style([
   titleBase,
   {
    padding:"0rem 0.3rem 0.3rem 0.3rem",
    background: `linear-gradient(to bottom, rgba(255, 255, 255, 0) 10%, ${BaseTheme.color.secondary()} 30%)`,
   }  
  

  ]),
  blog:style([
 titleBase,
    {

      padding:"0.8rem 0.6rem 0.8rem 0.6rem",
      borderRadius:BoxStyle.border.radius.basic,
      background:BaseTheme.color.primary(),
      '@media':{
        [BreakPoints.xxs.css]:{
          padding:"0.4rem 0.3rem 0.4rem 0.3rem",
          width:"80%",
        }
      }
    }

  ])

}

export const contentContainer = style({
  height: '99%',
  position: 'relative',
  width: '100%',
  padding: '1rem',
  overflowX:"scroll",
  scrollbarWidth:"none",
  display: 'flex',
});

export const contentPosition={
 
      start:style({
         justifyContent:"start",
       

      }),
      center:style({

         justifyContent:"center",
         '@media':{
          [BreakPoints.xxs.css]:{

            justifyContent:"start",
          },
          [BreakPoints.xs.css]:{

            justifyContent:"start",
          },
          [BreakPoints.sm.css]:{

            justifyContent:"start",
          }
         }

      }),
      
};

export const direction = {
  column: style({
    flexDirection: 'column',
  }),
  row: style({
    flexDirection: 'row',
  }),
};
