// THANKS to MARY ROSE COOK!!
// https://github.com/maryrosecook/drum-machine
export function note(audio, frequency) {
    return function() {
      var duration = 1;
        console.log(" a note!!! with freq", frequency)
      // Create the basic note as a sine wave.  A sine wave produces a
      // pure tone.  Set it to play for `duration` seconds.
      var sineWave = createSineWave(audio, duration);
  
      // Set the note's frequency to `frequency`.  A greater frequency
      // produces a higher note.
      sineWave.frequency.value = frequency;
  
      // Web audio works by connecting nodes together in chains.  The
      // output of one node becomes the input to the next.  In this way,
      // sound is created and modified.
      chain([
  
        // `sineWave` outputs a pure tone.
        sineWave,
  
        // An amplifier reduces the volume of the tone from 20% to 0
        // over the duration of the tone.  This produces an echoey
        // effect.
        createAmplifier(audio, 0.2, duration),
  
        // The amplified output is sent to the browser to be played
        // aloud.
        audio.destination]);
    };
  };

  // **kick()** plays a kick drum sound for `1` second.
export function kick(audio) {
    return function() {
      var duration = 2;
      console.log("kick!!!!")
  
      // Create the basic note as a sine wave.  A sine wave produces a
      // pure tone.  Set it to play for `duration` seconds.
      var sineWave = createSineWave(audio, duration);
  
      // Set the initial frequency of the drum at a low `160`.  Reduce
      // it to 0 over the duration of the sound.  This produces that
      // BBBBBBBoooooo..... drop effect.
      rampDown(audio, sineWave.frequency, 160, duration);
  
      // Web audio works by connecting nodes together in chains.  The
      // output of one node becomes the input to the next.  In this way,
      // sound is created and modified.
      chain([
  
        // `sineWave` outputs a pure tone.
        sineWave,
  
        // An amplifier reduces the volume of the tone from 40% to 0
        // over the duration of the tone.  This produces an echoey
        // effect.
        createAmplifier(audio, 0.4, duration),
  
        // The amplified output is sent to the browser to be played
        // aloud.
        audio.destination]);
    };
  };
  
  // **createSineWave()** returns a sound node that plays a sine wave
  // for `duration` seconds.
  function createSineWave(audio, duration) {
  
    // Create an oscillating sound wave.
    var oscillator = audio.createOscillator();
  
    // Make the oscillator a sine wave.  Different types of wave produce
    // different characters of sound.  A sine wave produces a pure tone.
    oscillator.type = "sine";
  
    // Start the sine wave playing right now.
    oscillator.start(audio.currentTime);
  
    // Tell the sine wave to stop playing after `duration` seconds have
    // passed.
    oscillator.stop(audio.currentTime + duration);
  
    // Return the sine wave.
    return oscillator;
  };
  
  // **rampDown()** takes `value`, sets it to `startValue` and reduces
  // it to almost `0` in `duration` seconds.  `value` might be the
  // volume or frequency of a sound.
  function rampDown(audio, value, startValue, duration) {
    value.setValueAtTime(startValue, audio.currentTime);
    value.exponentialRampToValueAtTime(0.01, audio.currentTime + duration);
  };
  
  // **createAmplifier()** returns a sound node that controls the volume
  // of the sound entering it.  The volume is started at `startValue`
  // and ramped down in `duration` seconds to almost `0`.
  function createAmplifier(audio, startValue, duration) {
    var amplifier = audio.createGain();
    rampDown(audio, amplifier.gain, startValue, duration);
    return amplifier;
  };
  
  // **chain()** connects an array of `soundNodes` into a chain.  If
  // there are three nodes in `soundNodes`, the output of the first will
  // be the input to the second, and the output of the second will be
  // the input to the third.
  function chain(soundNodes) {
    for (var i = 0; i < soundNodes.length - 1; i++) {
      soundNodes[i].connect(soundNodes[i + 1]);
    }
  };