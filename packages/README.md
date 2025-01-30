

in the ts config of the app add this 

    "paths": {
      "@movie-recommendation/utils": ["../../packages/utils/src"]
    }


i nthe package you can directly add the package name to dependencies 
and then pnpm i

or you can run 
pnpm add @movie-recommendation/utils --workspace --filter frontend
