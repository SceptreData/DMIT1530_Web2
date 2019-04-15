# CSS Grid Layout Properties

### Resources <br/> [css grid by example](https://gridbyexample.com/examples/)





## CSS Grid Properties for Defining A Grid    
- grid columns
- grid rows
- grid areas

```css
  display:grid
  grid-template-columns: repeat(4, 1fr)
  grid-template-rows: repeat(4, 15vh)
  grid-template-areas: 
        "nav nav nav"
        "header header header";
```
 

## Positioning Items In The Grid   
- grid-row
- grid-column
- grid-area

```css
 nav{
    grid-column: 1/-1;
    grid-row:1;
}

aside{
    grid-column: 1/span 2;
    grid-row: 2/4;
}
```  
 

## Grid Area Map 

```css

   grid-template-areas:
   "header header header"
   "nav    main    main"
   "nav    footer   footer"
}

nav{
    grid-area:nav
}
header{
  grid-area:header
}
```
 
 


## Grid Auto Fit and Auto Fill
- auto-fit  
- auto-fill
 
 
 
 


## Responsive Grids
- minmax(minval, maxvalue)
```css
grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));  
grid-template-columns: fit-content(100px)  minmax(180px, 1fr)  fit-content(200px);
```



 