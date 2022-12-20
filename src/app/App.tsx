import { getErrorMessage } from "utils/error"

/* routes */
import { useNav } from "./routes"
import { ErrorBoundary, Wrong } from "components/feedback"

/* init */
import InitBankBalance from "./InitBankBalance"

const App = () => {
  const { element: routes } = useNav()

  return (
    <ErrorBoundary fallback={fallback}>
      <InitBankBalance>{routes}</InitBankBalance>
    </ErrorBoundary>
  )
}

export default App

/* error */
export const fallback = (error: Error) => (
  <Wrong>{getErrorMessage(error)}</Wrong>
)
