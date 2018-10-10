import RSVP from 'rsvp'

const { resolve } = RSVP

export default function serviceWorkerHasUpdate() {
  return resolve(window.setupEmberServiceWorkerUpdateNofify() || false);
}
