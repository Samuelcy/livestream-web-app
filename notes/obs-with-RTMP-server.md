# OBS with RTMP Flow

- **OBS gets the user stream.**
- **Stream is sent to the RTMP server.**
  - An RTMP server enables you to receive a live video stream in Real-Time Messaging Protocol (RTMP) from an encoder and convert it to a playback protocol like HTTP Live Streaming (HLS) for viewing. RTMP is recognized for its low-latency video streaming capabilities.
- **The RMTP server is queried from the Server API to check which channels are online (if the stream is active).**
- **The client (React) requests the channel stream using a specific stream key from the RTMP server.**
- **All connections are routed through the RTMP server.**
