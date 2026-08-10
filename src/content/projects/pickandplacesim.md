---
title: "Pick and place simulation"
summary: "A python simulation to display and analyse a pick and place robot arm"
stack: ["Python", "Pygame", "MATPLOTLIB", "PID", "Root Locus Analysis"]
role: "Solo Project"
status: "in-progress"
repoUrl: "https://github.com/dpsomoRMECH/ControlSystemsSimulation"
demoUrl: ""
date: 2026-08-8
featured: true
order: 3
---



## Problem

For an upcoming robotic control project, i challenged myself to create a simulation of the arms movement. 

## Approach

Using pygame as a graphics library within python, i'm emulating a closed-loop pick and place system. I've used a PID controller which i tuned using root locus analysis and by inspecting the transient response. The target motion for this system needed to be smooth motion avoiding sudden stops, due to the eventual physical system using a solenoid electromagnet end effector. 
## Result

We are able to observe how the arm follows the reference input, and alter the controller to dictate the properties of the system. 


## What I'd do differently