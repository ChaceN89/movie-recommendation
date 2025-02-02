import TailwindBreakpoints from './TailwindBreakpoints'
import DarkModeToggle from './DarkModeToggle'

import { getEnv } from "@movie-recommendation/utils";


export const DevTools: React.FC = () => {

  const isDevelopment = getEnv('NODE_ENV',"false") === "development";

  if (!isDevelopment) return null;


  return (
    <>
      <TailwindBreakpoints/>
      <DarkModeToggle/>
    </>
  )}
