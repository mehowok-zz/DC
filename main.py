from oct2py import octave

octave.addpath('/home')

for i in range(10):
    octave.calc(1, 2, i)