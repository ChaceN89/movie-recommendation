# movie-recommendation
A movie reccomendation application. This is a full stack application mainly focused on dev Ops and deplopyment to AWS



using a pnpm workspace.yaml for dependencies 

pnpm --version
9.15.4


pnpm init
pnpm install



'pnpm --filter frontend run dev'
 or 'pnpm run dev' from inside the frontend folder

backend 
pnpm --filter backend run dev



run both together - not great for dev but goos for small changes and testing a couple of simple things (uses pnpm workspaces)
pnpm run dev -r

or 
pnpm add -D concurrently
add to dev scritps 
    "dev": "concurrently \"pnpm --filter backend run dev\" \"pnpm --filter frontend run dev\"",
pnpm run dev   - from root directpry 





maybe a set up to run one command to run all things backend and frontend  pnpm run dev:all


need to separate for AWS deployemnt 

!!!!!!!problem with this command breaking everything !!!!!!
run pnpm install
 in the root directory to update the workspaces



 how to install dependancies 

 pnpm install
 
 jsut frontend
pnpm install --filter frontend

jsut backend 
pnpm install --filter backend



verify workspaces

pnpm list --depth=1
