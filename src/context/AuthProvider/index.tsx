import React, {createContext} from "react";
import { IContext } from "./types";

export const AuthContext = createContext<IContext>({} as IContext);

