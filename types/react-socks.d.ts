declare module 'react-socks' {
  export default React.Component;
  export declare class BreakpointProvider extends React.Component {}

  export interface BreakpointDefinition {
    [index: string]: number
  }
  export declare function setDefaultBreakpoints(defs: BreakpointDefinition[]) {}
}
