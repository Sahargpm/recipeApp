import { style } from "@vanilla-extract/css";

export const iconContainer = style({
  
  display:"flex",
  alignItems:"center",
  justifyContent:"center",
  paddingLeft:"1rem",
});

export const titleContainer = style({
    display: "flex",                // Flexbox layout
    flexDirection: "row",            // Row direction (default, but explicit)
    width: "auto",                   // Container grows based on content
    height: "100%",                  // Set height to 100% of parent container
    alignItems: "center",            // Vertically center text within the container
    justifyContent: "start",  
    padding:"1rem 1rem 1rem 0.2rem"       // Align items to the start of the container horizontally          // Add some padding to avoid content touching edges
  });
  
