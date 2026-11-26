import { Component, type ReactNode } from 'react'
export default class ErrorBoundary extends Component<{ children: ReactNode }, { error?: Error }> {
  state: { error?: Error } = {}
  static getDerivedStateFromError(error: Error) { return { error } }
  render() {
    if (!this.state.error) return this.props.children
    return (<div style={{ maxWidth: 640, margin: '15vh auto', padding: 24, fontFamily: 'sans-serif' }}>
      <h1 style={{ fontSize: 24 }}>Data error</h1>
      <p>The page could not load. Check <b>trips.json</b> and <b>ships.json</b> (shipId must match a ship id, dates must be YYYY-MM-DD).</p>
      <pre style={{ background: '#eee', padding: 12, whiteSpace: 'pre-wrap' }}>{this.state.error.message}</pre></div>)
  }
}
