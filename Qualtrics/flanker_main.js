<!DOCTYPE html>
<html>

<head>
  <title>Flanker Task</title>
  <script src="Flanker_Qualtrics/jspsych.js"></script>
  <script src="Flanker_Qualtrics/plugins/jspsych-html-keyboard-response.js"></script>
  <script src="Flanker_Qualtrics/plugins/jspsych-image-keyboard-response.js"></script>
  <link rel="stylesheet" href="Flanker_Qualtrics/css/jspsych.css">
</head>

<body>
</body>
<script>
  /* experiment parameters */
  var reps_per_trial_type = 4;

  /*set up welcome block*/
  var welcome = {
    type: "html-keyboard-response",
    stimulus: "Welcome to the experiment. Press any key to begin."
  };

  /*set up instructions block*/
  var instructions = {
    type: "html-keyboard-response",
    stimulus: "<p>Dans cette tâche, tu verras apparaitre cinq flèches à l’écran. Exactement comme l’exemple que tu viens d’avoir.</p>" +
      "<img src='img/inc1.png'></img>" +
      "<p>Pèse la flèche de gauche sur ton clavier si la flèche à l’écran pointe à gauche. (<)</p>" +
      "<p>Pèse la flèche de droite sur ton clavier si la flèche à l’écran pointe à droite. (>)</p>" +
      "<p>Pèse n’importe quelle touche lorsque tu es prêt à commencer.</p>",
    post_trial_gap: 1000
  };

  /*defining stimuli*/
  var test_stimuli = [
    {
      stimulus: "img/con1.png",
      data: { stim_type: 'congruent', direction: 'left'}
    },
    {
      stimulus: "img/con2.png",
      data: { stim_type: 'congruent', direction: 'right'}
    },
    {
      stimulus: "img/inc1.png",
      data: { stim_type: 'incongruent', direction: 'right'}
    },
    {
      stimulus: "img/inc2.png",
      data: { stim_type: 'incongruent', direction: 'left'}
    }
  ];

  /* defining test timeline */
  var test = {
    timeline: [{
      type: 'image-keyboard-response',
      choices: [37, 39],
      trial_duration: 1500,
      stimulus: jsPsych.timelineVariable('stimulus'),
      data: jsPsych.timelineVariable('data'),
      on_finish: function (data) {
        var correct = false;
        if (data.direction == 'left' && data.key_press == 37 && data.rt > -1) {
          correct = true;
        } else if (data.direction == 'right' && data.key_press == 39 && data.rt > -1) {
          correct = true;
        }
        data.correct = correct;
      },
      post_trial_gap: function () {
        return Math.floor(Math.random() * 1500) + 500;
      }
    }],
    timeline_variables: test_stimuli,
    sample: {
      type: 'fixed-repetitions',
      size: reps_per_trial_type
    }
  };

  /*defining debriefing block*/
  var debrief = {
    type: "html-keyboard-response",
    stimulus: function () {
      var total_trials = jsPsych.data.get().filter({
        trial_type: 'image-keyboard-response'
      }).count();
      var accuracy = Math.round(jsPsych.data.get().filter({
        correct: true
      }).count() / total_trials * 100);
      var congruent_rt = Math.round(jsPsych.data.get().filter({
        correct: true,
        stim_type: 'congruent'
      }).select('rt').mean());
      var incongruent_rt = Math.round(jsPsych.data.get().filter({
        correct: true,
        stim_type: 'incongruent'
      }).select('rt').mean());
      return "<p>You responded correctly on <strong>" + accuracy + "%</strong> of the trials.</p> " +
        "<p>Your average response time for congruent trials was <strong>" + congruent_rt + "ms</strong>.</p>" +
        "<p>Your average response time for incongruent trials was <strong>" + incongruent_rt + "ms</strong>.</p>" +
        "<p>Press any key to complete the experiment. Thank you!</p>";
    }
  };

  /*set up experiment structure*/
  var timeline = [];
  timeline.push(welcome);
  timeline.push(instructions);
  timeline.push(test);
  timeline.push(debrief);

  /*start experiment*/
  jsPsych.init({
    timeline: timeline,
    on_finish: function () {
      jsPsych.data.displayData();
    }
  });
</script>

</html>