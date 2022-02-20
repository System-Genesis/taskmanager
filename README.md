# ctrlAltDelete

Task manager for traking.

start the daily pncy tun.
handle all TRAKING action.
- ---- splitter GET & POST from PNCY
- ---- recovery run merged objects
- ---- mergedUsers get merged objects
- ---- change the daily run of pncy

ROUTES:

- POST newFile,
- POST api/splitter/all,
- POST ------------/source/:source,
- POST ------------/identifier/:id/source/:source,
- POST ------------/identifier/:identifier,
- POST ------------/digitalIdentity/:digitalIdentity,
- POST ------------/digitalIdentity/:digitalIdentity/source/:source,
- GET -------------/digitalIdentity/:digitalIdentity,
- GET -------------/digitalIdentity/:digitalIdentity/source/:source,
- GET -------------/all,
- GET -------------/source/:source,
- GET -------------/identifier/:id/source/:source,
- GET -------------/identifier/:identifier,
- POST api/recovery/all,
- POST ------------/source/:source,
- POST ------------/identifier/:identifier,
- POST ------------/byDate/:dateMs,
- POST ------------/source/:source/digitalIdentity/:digitalIdentityUniqueId,
- GET api/mergedUsers/all,
- GET ---------------/source/:source,
- GET ---------------/identifier/:identifier,
- GET ---------------/byDate/:dateMs,
- GET ---------------/source/:source/digitalIdentity/:digitalIdentityUniqueId,
- POST api/daily/hour/:hour/minute/:minute
