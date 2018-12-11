"""
Spines are the lines connecting the axis tick marks and noting
the boundaries of the data area. They can be placed at arbitrary
positions and until now, they were on the border of the axis.
We'll change that since we want to have them in the middle.
Since there are four of them (top/bottom/left/right), we'll
discard the top and right by setting their color to none and
we'll move the bottom and left ones to coordinate 0 in data
space coordinates.
You can also play with the ticks positions by setting them to
both or none.
:lesson goal file: goal06.py
"""

# Imports
import numpy as np
import matplotlib.pyplot as plt

x = np.linspace(-np.pi, np.pi, 256, endpoint=True)
c, s = np.cos(x), np.sin(x)

# Plot cosine using blue color with a continuous line of width 2 (pixels)
plt.plot(x, c, color="blue", linewidth=2.0, linestyle="-")

# Plot sine using red color with a continuous line of width 2 (pixels)
plt.plot(x, s, color="red", linewidth=2.0, linestyle="-")

# Set x limits
plt.xlim(x.min()*1.1, x.max()*1.1)

# Set x ticks
plt.xticks([-np.pi, -np.pi/2, 0, np.pi/2, np.pi],
           [r'$-\pi$', r'$-\pi/2$', r'$0$', r'$+\pi/2$', r'$+\pi$'])

# Set y limits
plt.ylim(c.min()*1.1, c.max()*1.1)

# Set y ticks
plt.yticks([-1, 0, 1])

ax = plt.gca()
ax.spines['right'].set_color('black')
ax.spines['top'].set_color('black')
ax.spines['bottom'].set_position(('data', c.min()*1.1))
ax.xaxis.set_ticks_position('bottom')
ax.spines['left'].set_position(('data', x.min()*1.1))
ax.yaxis.set_ticks_position('left')

# Show result on screen
plt.show()
