// Genre Distribution Chart
const genreCtx = document.getElementById('genreChart').getContext('2d');
new Chart(genreCtx, {
    type: 'pie',
    data: {
        labels: ['Acoustic', 'Pop', 'Rock', 'Electronic', 'Classical', 'Other'],
        datasets: [{
            data: [30, 25, 20, 15, 5, 5],
            backgroundColor: [
                '#1DB954', '#1ED760', '#2EBD59', '#57B560', '#81B71A', '#A0C3D2'
            ]
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom',
            },
            title: {
                display: true,
                text: 'Track Genres Distribution'
            }
        }
    }
});

// Popularity vs Danceability Chart
const popDanceCtx = document.getElementById('popularityDanceabilityChart').getContext('2d');
new Chart(popDanceCtx, {
    type: 'scatter',
    data: {
        datasets: [{
            label: 'Tracks',
            data: [
                {x: 0.65, y: 80},
                {x: 0.75, y: 85},
                {x: 0.55, y: 70},
                {x: 0.85, y: 90},
                {x: 0.45, y: 60},
                // Add more data points as needed
            ],
            backgroundColor: '#1DB954'
        }]
    },
    options: {
        responsive: true,
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Danceability'
                }
            },
            y: {
                title: {
                    display: true,
                    text: 'Popularity'
                }
            }
        },
        plugins: {
            title: {
                display: true,
                text: 'Popularity vs Danceability'
            }
        }
    }
});

// Track Duration Distribution Chart
const durationCtx = document.getElementById('durationChart').getContext('2d');
new Chart(durationCtx, {
    type: 'bar',
    data: {
        labels: ['1-2', '2-3', '3-4', '4-5', '5+'],
        datasets: [{
            label: 'Number of Tracks',
            data: [10, 30, 50, 20, 5],
            backgroundColor: '#1DB954'
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Number of Tracks'
                }
            },
            x: {
                title: {
                    display: true,
                    text: 'Duration (minutes)'
                }
            }
        },
        plugins: {
            title: {
                display: true,
                text: 'Track Duration Distribution'
            }
        }
    }
});