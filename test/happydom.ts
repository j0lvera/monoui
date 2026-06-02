import { GlobalRegistrator } from "@happy-dom/global-registrator";

// Register a DOM into the global scope so @testing-library/react can render.
GlobalRegistrator.register();
