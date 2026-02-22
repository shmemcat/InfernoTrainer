declare module "new-relic-browser" {
  interface NewRelicBrowser {
    addRelease(name: string, id: string): void;
  }
  const newrelic: NewRelicBrowser;
  export default newrelic;
}
