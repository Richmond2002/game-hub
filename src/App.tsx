import { Grid, GridItem, Show } from "@chakra-ui/react";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area="nav" bg="coral">
        nav
      </GridItem>
      <GridItem
        area="aside"
        display={{ base: "none", lg: "block" }}
        bg="dodgerblue"
      >
        aside
      </GridItem>

      <GridItem area="main" bg="gold">
        main
      </GridItem>
    </Grid>
  );
}

export default App;
